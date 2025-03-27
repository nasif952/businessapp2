// Base API URL - use environment variable in production
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

// Generic fetch function with error handling
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<{ success: boolean; data?: T; message: string }> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    })

    const json = await res.json()

    if (!res.ok) {
      throw new Error(json.message || "An error occurred")
    }

    return json
  } catch (error) {
    console.error("API error:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

// Company APIs
export const companyAPI = {
  getCompany: (id: string) => fetchAPI(`/api/companies/${id}`),
  updateCompany: (id: string, data: any) =>
    fetchAPI(`/api/companies/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  createCompany: (data: any) =>
    fetchAPI("/api/companies", {
      method: "POST",
      body: JSON.stringify(data),
    }),
}

// Financial APIs
export const financialAPI = {
  getFinancials: (companyId: string, month?: string, year?: string) => {
    let url = `/api/financials/${companyId}`
    if (month && year) {
      url += `?month=${month}&year=${year}`
    }
    return fetchAPI(url)
  },
  saveFinancials: (data: any) =>
    fetchAPI("/api/financials", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  getHistory: (companyId: string, months = 6) => fetchAPI(`/api/financials/history/${companyId}?months=${months}`),
  getForecast: (companyId: string) => fetchAPI(`/api/financials/forecast/${companyId}`),
}

// Valuation APIs
export const valuationAPI = {
  getValuation: (companyId: string) => fetchAPI(`/api/valuation/${companyId}`),
  calculateValuation: (companyId: string) =>
    fetchAPI("/api/valuation/calculate", {
      method: "POST",
      body: JSON.stringify({ companyId }),
    }),
}

// Questionnaire APIs
export const questionnaireAPI = {
  getAnswers: (companyId: string) => fetchAPI(`/api/questionnaire/${companyId}`),
  saveAnswers: (data: any) =>
    fetchAPI("/api/questionnaire", {
      method: "POST",
      body: JSON.stringify(data),
    }),
}

// Performance APIs
export const performanceAPI = {
  getMetrics: (companyId: string) => fetchAPI(`/api/performance/${companyId}`),
  saveMetrics: (data: any) =>
    fetchAPI("/api/performance", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  bulkUpload: (companyId: string, metrics: any[]) =>
    fetchAPI("/api/performance/bulk", {
      method: "POST",
      body: JSON.stringify({ companyId, metrics }),
    }),
}

// Cap Table APIs
export const capTableAPI = {
  getCapTable: (companyId: string) => fetchAPI(`/api/captable/${companyId}`),
  addShareholder: (companyId: string, shareholder: any) =>
    fetchAPI("/api/captable/shareholder", {
      method: "POST",
      body: JSON.stringify({ companyId, shareholder }),
    }),
  addRound: (companyId: string, round: any) =>
    fetchAPI("/api/captable/round", {
      method: "POST",
      body: JSON.stringify({ companyId, round }),
    }),
}

// File APIs
export const fileAPI = {
  getFiles: (companyId: string, location = "/") =>
    fetchAPI(`/api/files/${companyId}?location=${encodeURIComponent(location)}`),
  createFolder: (companyId: string, name: string, location = "/", owner?: string) =>
    fetchAPI("/api/files/folder", {
      method: "POST",
      body: JSON.stringify({ companyId, name, location, owner }),
    }),
  getDownloadUrl: (fileId: string) => fetchAPI(`/api/files/download/${fileId}`),
  deleteFile: (fileId: string) =>
    fetchAPI(`/api/files/${fileId}`, {
      method: "DELETE",
    }),
}

// File upload function (handles multipart/form-data)
export async function uploadFile(companyId: string, file: File, location = "/", owner?: string, isPublic = false) {
  try {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("companyId", companyId)
    formData.append("location", location)
    if (owner) formData.append("owner", owner)
    formData.append("isPublic", isPublic.toString())

    const res = await fetch(`${API_URL}/api/files/upload`, {
      method: "POST",
      body: formData,
    })

    const json = await res.json()

    if (!res.ok) {
      throw new Error(json.message || "An error occurred")
    }

    return json
  } catch (error) {
    console.error("File upload error:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

