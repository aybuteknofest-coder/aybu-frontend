// Backend API adresi. Canlıda Cloudflare Pages > Environment variables içinden
// REACT_APP_API_URL olarak verilir (sonunda "/" olmadan). Yerelde varsayılan kullanılır.
const API_URL = (process.env.REACT_APP_API_URL || "http://127.0.0.1:8000").replace(/\/+$/, "");

export default API_URL;
