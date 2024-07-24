import axios from "axios";
import {API_URL} from "@/constant";

const http = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMDExMTIyMzMiLCJhY3RpdmVVc2VySWQiOjEwMDAsInJvbGVzIjpbIlNZU1RFTV9ST0xFX1NVUEVSX0FETUlOIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTUxNS9hcGkvYXV0aC9sb2dpbiIsImV4cCI6MTcyMTU2OTMzMX0.WXEVigVg_gGhExyz-lg9zkTHjGeTgCYZeLEZLZYLCtA`,
        accept: "*/*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": true,
        expires: "0",
        "cache-control": "no-cache,no-store,max-age=0,must-revalidate",
        pragma: "no-cache",
    }
});

export default http;