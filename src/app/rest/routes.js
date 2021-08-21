const base = process.env.REACT_APP_API_BASE_URL

const routes = {
    vaccinationPoints: () => `${base}/points`,
    vaccinationPoint: (id) => `${base}/points/${id}`
}

export default routes;