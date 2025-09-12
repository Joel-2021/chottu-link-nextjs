"use client"

import { toast } from "sonner";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(60),
    email: z.string().email({ message: "Enter a valid email address." }).max(60),
    phone: z.string()
        .min(7, { message: "Phone number is too short." })
        .max(15, { message: "Phone number is too long." }),
})

type FormValues = z.infer<typeof formSchema>

type ContactDialogProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
};

export default function ContactDialog({ open, setOpen }: ContactDialogProps) {

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    function onSubmit(values: FormValues) {
        // trackEvent('Custom Pricing Requested', values);

        console.log(values)
        // Show success toast
        toast.success(`Thank you! Your request has been submitted successfully. We'll get in touch with you soon.`);

        // Reset form
        form.reset();

        // Close dialog
        setOpen(false);
    }

    return (
        <Dialog open={ open } onOpenChange={ setOpen }>
            {/*<DialogTrigger asChild>*/ }
            {/*    <button className="w-full bg-[#abc7ff] p-2 cursor-pointer font-bold text-background rounded-3xl">*/ }
            {/*        Contact Sales*/ }
            {/*    </button>*/ }
            {/*</DialogTrigger>*/ }

            <DialogContent onInteractOutside={ (e) => {
                e.preventDefault();
            } } className="bg-gradient-to-b from-[#3a5f6c] to-[#021620]
                           rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto
                           shadow-2xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-4
                           p-6">
                <DialogHeader className="mb-4">
                    <DialogTitle className="text-xl font-semibold text-white">
                        Contact Us
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-300">
                        Please fill out the form below and we&#39;ll get in touch with you.
                    </DialogDescription>
                </DialogHeader>

                <Form { ...form }>
                    <form onSubmit={ form.handleSubmit(onSubmit) } className="space-y-6">

                        {/* Name */ }
                        <FormField
                            control={ form.control }
                            name="name"
                            render={ ({ field }) => (
                                <FormItem>
                                    <FormLabel>Name *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" maxLength={ 60 } { ...field } className="bg-transparent border border-gray-300 text-white
                                                       placeholder-gray-400 rounded-md px-4 py-2
                                                       focus:border-blue-400 focus:ring-2 focus:ring-blue-200"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            ) }
                        />

                        {/* Email */ }
                        <FormField
                            control={ form.control }
                            name="email"
                            render={ ({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address *</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="john@example.com" maxLength={ 60 } className="bg-transparent border border-gray-300 text-white
                                                       placeholder-gray-400 rounded-md px-4 py-2
                                                       focus:border-blue-400 focus:ring-2 focus:ring-blue-200" { ...field } />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            ) }
                        />

                        {/* Phone */ }
                        <FormField
                            control={ form.control }
                            name="phone"
                            render={ ({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Phone Number *</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="+1 123 456 7890" maxLength={ 15 } { ...field }
                                               className="bg-transparent border border-gray-300 text-white
                                                       placeholder-gray-400 rounded-md px-4 py-2
                                                       focus:border-blue-400 focus:ring-2 focus:ring-blue-200"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            ) }
                        />

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
