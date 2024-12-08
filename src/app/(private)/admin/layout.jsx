import { AuthProvider } from "@/app/context/AuthContext.js"

const AdminLayout = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}
export default AdminLayout
