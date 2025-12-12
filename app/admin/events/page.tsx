"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Plus, Pencil, Trash2 } from "lucide-react"
// Đã loại bỏ import { getTranslation, getCurrentLanguage } từ "@/lib/i18n"
import { getCurrentUser } from "@/lib/auth"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image?: string
  maxParticipants?: number
  registeredParticipants: string[]
  createdAt: string
}

// Văn bản tiếng Việt cố định
const VIETNAMESE_TEXT = {
  adminTitle: "Quản Lý Sự Kiện",
  adminSubtitle: "Tạo, chỉnh sửa hoặc xóa các sự kiện cộng đồng và hội thảo.",
  createEvent: "Tạo Sự Kiện Mới",
  editEvent: "Chỉnh Sửa Sự Kiện",
  editEventDesc: "Cập nhật thông tin chi tiết về sự kiện này.",
  createEventDesc: "Nhập các thông tin cần thiết để tổ chức một sự kiện mới.",
  eventTitle: "Tiêu đề sự kiện",
  eventDescription: "Mô tả",
  eventDate: "Ngày",
  eventTime: "Giờ",
  eventLocation: "Địa điểm",
  eventImage: "Đường dẫn ảnh (URL)",
  maxParticipants: "Số lượng tối đa (người)",
  unlimited: "Không giới hạn",
  cancel: "Hủy",
  update: "Cập nhật",
  create: "Tạo",
  full: "Đã đầy",
  edit: "Chỉnh sửa",
  delete: "Xóa",
  noEventsAdmin: "Không có sự kiện nào được tạo. Hãy tạo sự kiện đầu tiên!",
  
  updateSuccess: "Cập nhật thành công!",
  createSuccess: "Tạo sự kiện thành công!",
  updateSuccessDesc: "Sự kiện đã được lưu.",
  createSuccessDesc: "Sự kiện mới đã được thêm vào hệ thống.",
  saveError: "Lỗi lưu sự kiện",
  saveErrorDesc: "Đã xảy ra lỗi khi cố gắng lưu sự kiện. Vui lòng thử lại.",
  deleteConfirm: "Bạn có chắc chắn muốn xóa sự kiện này không? Hành động này không thể hoàn tác.",
  deleteSuccess: "Xóa thành công",
  deleteSuccessDesc: "Sự kiện đã được xóa khỏi hệ thống.",
  deleteError: "Lỗi xóa sự kiện",
  deleteErrorDesc: "Không thể xóa sự kiện. Vui lòng kiểm tra lại."
};


export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  
  // Loại bỏ biến 't' và thay bằng VIETNAMESE_TEXT
  const t = VIETNAMESE_TEXT;
  
  const [user, setUser] = useState<ReturnType<typeof getCurrentUser>>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    image: "",
    maxParticipants: "",
  })

  useEffect(() => {
    // Loại bỏ logic lấy ngôn ngữ hiện tại
    const currentUser = getCurrentUser()
    setUser(currentUser)

    if (!currentUser || currentUser.role !== "admin") {
      router.push("/")
      return
    }

    fetchEvents()
  }, [router])

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events")
      if (response.ok) {
        const data = await response.json()
        setEvents(data)
      }
    } catch (error) {
      console.error("Error fetching events:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const url = "/api/events"
      const method = editingEvent ? "PUT" : "POST"
      const body = {
        ...(editingEvent && { id: editingEvent.id }),
        title: formData.title,
        description: formData.description,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        image: formData.image || undefined,
        maxParticipants: formData.maxParticipants ? Number(formData.maxParticipants) : undefined,
      }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        toast({
          title: editingEvent ? t.updateSuccess : t.createSuccess,
          description: editingEvent ? t.updateSuccessDesc : t.createSuccessDesc,
        })
        setIsDialogOpen(false)
        resetForm()
        fetchEvents()
      } else {
        throw new Error("Failed to save event")
      }
    } catch (error) {
      console.error("Error saving event:", error)
      toast({
        title: t.saveError,
        description: t.saveErrorDesc,
        variant: "destructive",
      })
    }
  }

  const handleEdit = (event: Event) => {
    setEditingEvent(event)
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      image: event.image || "",
      maxParticipants: event.maxParticipants?.toString() || "",
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (eventId: string) => {
    if (!confirm(t.deleteConfirm)) return

    try {
      const response = await fetch(`/api/events?id=${eventId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast({
          title: t.deleteSuccess,
          description: t.deleteSuccessDesc,
        })
        fetchEvents()
      }
    } catch (error) {
      console.error("Error deleting event:", error)
      toast({
        title: t.deleteError,
        description: t.deleteErrorDesc,
        variant: "destructive",
      })
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      image: "",
      maxParticipants: "",
    })
    setEditingEvent(null)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    // Cố định định dạng tiếng Việt (vi-VN)
    return date.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  if (!user || user.role !== "admin") {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="mb-2 text-4xl font-bold">
                  {t.adminTitle}
                </h1>
                <p className="text-muted-foreground">{t.adminSubtitle}</p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={resetForm}>
                    <Plus className="mr-2 h-4 w-4" />
                    {t.createEvent}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{editingEvent ? t.editEvent : t.createEvent}</DialogTitle>
                    <DialogDescription>
                      {editingEvent ? t.editEventDesc : t.createEventDesc}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">{t.eventTitle}</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">{t.eventDescription}</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={4}
                        required
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="date">{t.eventDate}</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">{t.eventTime}</Label>
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">{t.eventLocation}</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">{t.eventImage}</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="/community-event.png"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxParticipants">{t.maxParticipants}</Label>
                      <Input
                        id="maxParticipants"
                        type="number"
                        min="1"
                        value={formData.maxParticipants}
                        onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })}
                        placeholder={t.unlimited}
                      />
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        {t.cancel}
                      </Button>
                      <Button type="submit">{editingEvent ? t.update : t.create}</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {loading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-48 animate-pulse bg-muted" />
                    <CardHeader>
                      <div className="h-6 animate-pulse rounded bg-muted" />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : events.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">{t.noEventsAdmin}</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    {event.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-balance">{event.title}</CardTitle>
                      <CardDescription className="text-pretty">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      {event.maxParticipants !== undefined && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4" />
                          <span>
                            {event.registeredParticipants.length} / {event.maxParticipants}
                          </span>
                          {event.registeredParticipants.length >= event.maxParticipants && (
                            <Badge variant="destructive" className="ml-auto">
                              {t.full}
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                        onClick={() => handleEdit(event)}
                      >
                        <Pencil className="mr-2 h-4 w-4" />
                        {t.edit}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                        onClick={() => handleDelete(event.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        {t.delete}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}