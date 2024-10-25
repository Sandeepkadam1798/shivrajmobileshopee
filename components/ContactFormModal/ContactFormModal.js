import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@/components/ui/input";

export default function ContactFormModal({ isOpen, onOpenChange }) {
  //   const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* <Button onPress={onOpen}>Contact Form</Button> */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out "
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col ">
                <div>
                <p>
                Share your contact details below 
                </p>
                <p>team will get in touch with you..!</p>
                </div>
          
                
              </ModalHeader>
              <ModalBody>
                <div className="p-6">
                  <form className="space-y-4">
                    <Input placeholder="Name" required />
                    <Input placeholder="Mobile Number" required />
                    <Input placeholder="Email Address" />
                    <Input placeholder="Model of Interest (e.g., Galaxy S)" />
                    <Input placeholder="Message" />

                    <Button type="submit"  className="bg-gradient-to-tr w-full from-pink-500 to-yellow-500 text-white shadow-lg">
                      Submit
                    </Button>
                    <Button onPress={onClose} color="danger" className="w-full mt-4">
                    Close
                    </Button>
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
