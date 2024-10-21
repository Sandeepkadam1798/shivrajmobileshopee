import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input"; // Assuming Input is a custom component from your project
import { Button } from "@/components/ui/button";

export function ContactFormModal({ isOpen, onClose }) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-center">Share your contact details</SheetTitle>
        </SheetHeader>
        <div className="p-6">
          <form className="space-y-4">
            <Input placeholder="Name" required />
            <Input placeholder="Mobile Number" required />
            <Input placeholder="Email Address" />
            <Input placeholder="Model of Interest (e.g., Galaxy S)" />

            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms" className="ml-2 text-sm">
                  I have read and accept the terms of Samsung Privacy Policy
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="promotions" />
                <label htmlFor="promotions" className="ml-2 text-sm">
                  Yes, I would like to receive offers and promotions from Samsung
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full mt-4 bg-orange-500">Submit</Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
