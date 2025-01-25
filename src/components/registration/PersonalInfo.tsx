import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegistrationData } from "@/pages/Register";

const formSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  icNumber: z
    .string()
    .regex(/^\d{12}$/, "IC number must be 12 digits"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/, "Invalid Malaysian phone number"),
});

interface PersonalInfoProps {
  formData: RegistrationData;
  updateFormData: (data: Partial<RegistrationData>) => void;
  onNext: () => void;
}

const PersonalInfo = ({ formData, updateFormData, onNext }: PersonalInfoProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: formData.fullName,
      icNumber: formData.icNumber,
      email: formData.email,
      phone: formData.phone,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateFormData(values);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="icNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>IC Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your IC number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Next
        </Button>
      </form>
    </Form>
  );
};

export default PersonalInfo;