import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/api"
})

//api.defaults.headers.common["token"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTgwODliYzMwMTc2NjJjMDRjZmNkYjEiLCJlbWFpbCI6ImtoYWNoaGFuZ0BnbWFpbC5jb20iLCJmdWxsTmFtZSI6ImtoYWNoaGFuZyIsInVzZXJUeXBlIjoiY2xpZW50IiwiaWF0IjoxNTg1NzUxMDc3LCJleHAiOjE1ODU3NTQ2Nzd9.lhTbrUTZ-8wLsQsXDBi83OkFhvv0JryAvECw35HzBe0"

export default api;
