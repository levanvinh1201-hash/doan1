"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import type { UserProfileForm } from "@/lib/user"
import { updateUserProfile } from "@/lib/auth"

interface ProfileEditFormProps {
  user: UserProfileForm
  onUpdate: (user: UserProfileForm) => void
}


export function ProfileEditForm({ user, onUpdate }: ProfileEditFormProps) {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const updatedUser = await updateUserProfile(user.id, { name, phone });

      if (!updatedUser) {
        toast({
          title: "Lỗi",
          description: "Không thể cập nhật hồ sơ",
          variant: "destructive",
        });
        return;
      }

      onUpdate(updatedUser);
      setIsEditing(false);

      toast({
        title: "Đã cập nhật hồ sơ",
        description: "Dữ liệu của bạn đã được lưu thành công",
      });
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Đã xảy ra lỗi khi cập nhật hồ sơ",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setName(user.name);
    setPhone(user.phone);
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Chỉnh Sửa</CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="edit-name">Tên</Label>
              <Input
                id="edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="edit-phone">Số Điện Thoại</Label>
              <Input
                id="edit-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Đang lưu..." : "Lưu"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Hủy
              </Button>
            </div>
          </form>
        ) : (
          <Button onClick={() => setIsEditing(true)}>
            Chỉnh sửa thông tin
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
