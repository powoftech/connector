"use client";

import EditProfileForm from "@/app/(platform)/in/[[...slug]]/_components/edit-profile-form";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function EditProfileContent() {
  return (
    <DialogContent
      className="md:max-w-[var(--main-content-width)]"
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here.
        </DialogDescription>
      </DialogHeader>

      <EditProfileForm />
    </DialogContent>
  );
}
