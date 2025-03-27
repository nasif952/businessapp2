"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Search, MoreVertical, Folder, FileIcon, Upload } from "lucide-react"
import { fileAPI, uploadFile } from "@/lib/api"
import { toast } from "sonner"

interface FileItem {
  _id: string
  name: string
  location: string
  owner: string
  date: string
  size: number
  url: string
  isFolder: boolean
}

export default function DataRoom() {
  // Use a placeholder company ID - in a real app, this would come from authentication
  const companyId = "placeholder-company-id"

  const [files, setFiles] = useState<FileItem[]>([])
  const [currentLocation, setCurrentLocation] = useState("/")
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [newFolderName, setNewFolderName] = useState("")
  const [showNewFolderInput, setShowNewFolderInput] = useState(false)

  useEffect(() => {
    fetchFiles()
  }, [currentLocation])

  const fetchFiles = async () => {
    try {
      setLoading(true)
      const response = await fileAPI.getFiles(companyId, currentLocation)

      if (response.success && response.data) {
        setFiles(response.data as FileItem[])
      } else {
        toast.error(response.message || "Failed to load files")
      }
    } catch (error) {
      console.error("Error fetching files:", error)
      toast.error("Failed to load files")
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    try {
      const file = files[0]
      toast.info(`Uploading ${file.name}...`)

      const response = await uploadFile(companyId, file, currentLocation)

      if (response.success) {
        toast.success(`${file.name} uploaded successfully`)
        fetchFiles()
      } else {
        toast.error(response.message || "Failed to upload file")
      }
    } catch (error) {
      console.error("Error uploading file:", error)
      toast.error("Failed to upload file")
    } finally {
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const handleCreateFolder = async () => {
    if (!newFolderName.trim()) {
      toast.error("Folder name cannot be empty")
      return
    }

    try {
      const response = await fileAPI.createFolder(companyId, newFolderName, currentLocation)

      if (response.success) {
        toast.success(`Folder ${newFolderName} created successfully`)
        setNewFolderName("")
        setShowNewFolderInput(false)
        fetchFiles()
      } else {
        toast.error(response.message || "Failed to create folder")
      }
    } catch (error) {
      console.error("Error creating folder:", error)
      toast.error("Failed to create folder")
    }
  }

  const handleFileClick = async (file: FileItem) => {
    if (file.isFolder) {
      // Navigate into the folder
      const newLocation = currentLocation === "/" ? `/${file.name}/` : `${currentLocation}${file.name}/`
      setCurrentLocation(newLocation)
    } else {
      // Get download URL for the file
      try {
        const response = await fileAPI.getDownloadUrl(file._id)

        if (response.success && response.data?.url) {
          // Open the file in a new tab
          window.open(response.data.url, "_blank")
        } else {
          toast.error(response.message || "Failed to get download URL")
        }
      } catch (error) {
        console.error("Error getting download URL:", error)
        toast.error("Failed to get download URL")
      }
    }
  }

  const handleDeleteFile = async (fileId: string) => {
    try {
      const response = await fileAPI.deleteFile(fileId)

      if (response.success) {
        toast.success("File deleted successfully")
        fetchFiles()
      } else {
        toast.error(response.message || "Failed to delete file")
      }
    } catch (error) {
      console.error("Error deleting file:", error)
      toast.error("Failed to delete file")
    }
  }

  const navigateUp = () => {
    if (currentLocation === "/") return

    const parts = currentLocation.split("/")
    parts.pop() // Remove the last empty string
    parts.pop() // Remove the current folder
    const newLocation = parts.join("/") + "/"
    setCurrentLocation(newLocation === "" ? "/" : newLocation)
  }

  const filteredFiles = searchQuery
    ? files.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : files

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-[#6B46C1] mb-6">DATA ROOM</h1>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Button
              className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mr-2 h-4 w-4" /> Upload File
            </Button>
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />

            {showNewFolderInput ? (
              <div className="flex space-x-2">
                <Input
                  placeholder="Folder name"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  className="w-40"
                />
                <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white" onClick={handleCreateFolder}>
                  Create
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowNewFolderInput(false)
                    setNewFolderName("")
                  }}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button
                className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white"
                onClick={() => setShowNewFolderInput(true)}
              >
                <Folder className="mr-2 h-4 w-4" /> Create Folder
              </Button>
            )}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-9 w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-500">
                  {currentLocation === "/" ? "Files & Folders" : currentLocation}
                </span>
                {currentLocation !== "/" && (
                  <Button variant="ghost" size="sm" onClick={navigateUp}>
                    (Go up)
                  </Button>
                )}
              </div>
            </div>

            {loading ? (
              <div className="h-[200px] flex items-center justify-center">
                <p className="text-gray-500">Loading files...</p>
              </div>
            ) : filteredFiles.length === 0 ? (
              <div className="h-[200px] flex items-center justify-center">
                <p className="text-gray-500">No files found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Location</th>
                      <th className="text-left p-2">Owner</th>
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">File Size</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFiles.map((file) => (
                      <tr key={file._id} className="border-b">
                        <td className="p-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id={file._id} />
                            {file.isFolder ? (
                              <Folder className="h-5 w-5 text-[#6B46C1]" />
                            ) : (
                              <FileIcon className="h-5 w-5 text-[#6B46C1]" />
                            )}
                            <span className="cursor-pointer hover:text-[#6B46C1]" onClick={() => handleFileClick(file)}>
                              {file.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-2">{file.location}</td>
                        <td className="p-2">{file.owner}</td>
                        <td className="p-2">{new Date(file.date).toLocaleDateString()}</td>
                        <td className="p-2">{file.isFolder ? "-" : `${Math.round(file.size / 1024)} KB`}</td>
                        <td className="p-2">
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteFile(file._id)}>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Investor Updates section remains the same */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Investor Updates</h2>
        <Card>
          <CardContent className="p-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search" className="pl-9 w-[250px]" />
            </div>
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-gray-500">No data available</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

