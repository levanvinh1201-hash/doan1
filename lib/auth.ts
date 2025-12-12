// @/lib/auth

// Client-side authentication (localStorage-based since no database)
// FIX 1: THÊM THUỘC TÍNH 'role'
export interface User {
  id: string
  email: string
  name: string
  phone: string
  createdAt: string
  role: "admin" | "user" // Role mặc định là 'user' hoặc 'admin'
}


const USERS_KEY = "spa_users"
const CURRENT_USER_KEY = "spa_current_user"

// TẠO ADMIN MẶC ĐỊNH LÚC KHỞI TẠO (Sẽ giải thích bên dưới)
function getInitialUsers(): User[] {
  const storedData = localStorage.getItem(USERS_KEY);
  if (storedData) {
    return JSON.parse(storedData);
  }
  
  // Khởi tạo người dùng Admin đầu tiên nếu chưa có dữ liệu nào
  const adminUser: User = {
    id: "admin_user_001",
    email: "admin@spa.com", // Email quản trị viên mặc định
    name: "Admin",
    phone: "0123456789",
    createdAt: new Date().toISOString(),
    role: "admin",
  };
  localStorage.setItem(`spa_password_admin@spa.com`, "admin123"); // Mật khẩu admin mặc định
  
  return [adminUser];
}


// Sửa lại getAllUsers để sử dụng logic khởi tạo admin
function getAllUsers(): User[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem(USERS_KEY)
  
  // Nếu chưa có user nào trong localStorage, dùng getInitialUsers để tạo admin mặc định
  return data ? JSON.parse(data) : getInitialUsers();
}


export function registerUser(email: string, password: string, name: string, phone: string): User | null {
  const users = getAllUsers()

  // Check if user already exists
  if (users.find((u) => u.email === email)) {
    return null
  }

  const user: User = {
    id: `user_${email}`,
    email,
    name,
    phone,
    createdAt: new Date().toISOString(),
    role: "user", // FIX 2: GÁN ROLE MẶC ĐỊNH LÀ "user" CHO USER ĐĂNG KÝ MỚI
  }

  // Store user
  users.push(user)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))

  // Store password separately (in real app, this would be hashed on backend)
  localStorage.setItem(`spa_password_${email}`, password)

  return user
}

export function loginUser(email: string, password: string): User | null {
  const users = getAllUsers()
  // LƯU Ý: getAllUsers đã được cập nhật để trả về admin mặc định nếu chưa có
  const user = users.find((u) => u.email === email)

  if (!user) {
    return null
  }

  // Check password
  const storedPassword = localStorage.getItem(`spa_password_${email}`)
  if (storedPassword !== password) {
    return null
  }

  // Set current user
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))

  return user
}

export function logoutUser(): void {
  localStorage.removeItem(CURRENT_USER_KEY)
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const data = localStorage.getItem(CURRENT_USER_KEY)
  // FIX 3: Khi lấy user từ localStorage, cần đảm bảo nó có role (dù logic cũ có thể thiếu)
  const user = data ? JSON.parse(data) : null;
  
  if (user && !user.role) {
      // Logic dự phòng nếu user cũ không có role (tránh lỗi runtime)
      // Tải lại toàn bộ user từ USERS_KEY để có role (đã được fix)
      const fullUser = getAllUsers().find(u => u.id === user.id);
      if (fullUser) {
          localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(fullUser));
          return fullUser;
      }
      return { ...user, role: "user" }; // Gán role mặc định nếu không tìm thấy
  }

  return user;
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}

// Hàm getAllUsers cũ đã được thay thế bằng hàm mới ở trên
// function getAllUsers(): User[] {
//   if (typeof window === "undefined") return []
//   const data = localStorage.getItem(USERS_KEY)
//   return data ? JSON.parse(data) : []
// }


export function updateUserProfile(userId: string, updates: Partial<User>): User | null {
  // Đảm bảo cập nhật luôn giữ lại role nếu không có trong updates
  const users = getAllUsers() 
  const userIndex = users.findIndex((u) => u.id === userId)

  if (userIndex === -1) {
    return null
  }

  users[userIndex] = { ...users[userIndex], ...updates }
  localStorage.setItem(USERS_KEY, JSON.stringify(users))

  // Update current user if it's the same user
  const currentUser = getCurrentUser()
  if (currentUser && currentUser.id === userId) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[userIndex]))
  }

  return users[userIndex]
}