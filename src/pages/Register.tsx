import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Address = {
  street: string;
  city: string;
  state: string;
  postcode: string;
};

type PersonInfo = {
  fullName: string;
  icNumber: string;
  email: string;
  phone: string;
  address: Address;
};

type HeirInfo = PersonInfo & {
  relationship: string;
};

type RegistrationData = {
  primaryUser: PersonInfo;
  isMarried: boolean;
  spouse?: PersonInfo;
  heirs: HeirInfo[];
};

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationData>({
    primaryUser: {
      fullName: "",
      icNumber: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        postcode: "",
      },
    },
    isMarried: false,
    heirs: [{ 
      fullName: "",
      icNumber: "",
      email: "",
      phone: "",
      relationship: "",
      address: {
        street: "",
        city: "",
        state: "",
        postcode: "",
      },
    }],
  });

  const { toast } = useToast();
  const totalSteps = 3;

  const validateIC = (ic: string) => {
    const icRegex = /^\d{6}-\d{2}-\d{4}$/;
    return icRegex.test(ic);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+60\d{9,10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (section: keyof RegistrationData, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleAddressChange = (section: keyof RegistrationData, field: keyof Address, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        address: {
          ...prev[section].address,
          [field]: value,
        },
      },
    }));
  };

  const handleAddHeir = () => {
    setFormData(prev => ({
      ...prev,
      heirs: [
        ...prev.heirs,
        {
          fullName: "",
          icNumber: "",
          email: "",
          phone: "",
          relationship: "",
          address: {
            street: "",
            city: "",
            state: "",
            postcode: "",
          },
        },
      ],
    }));
  };

  const handleRemoveHeir = (index: number) => {
    setFormData(prev => ({
      ...prev,
      heirs: prev.heirs.filter((_, i) => i !== index),
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const loadingToast = toast({
        title: "Creating your account...",
        description: "Please wait while we process your registration.",
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Registration Successful! 🎉",
        description: "Your account has been created. You can now log in.",
        duration: 5000,
      });

      // Redirect to login
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "Please try again later.",
      });
    }
  };

  const renderInputField = (
    label: string,
    name: string,
    value: string,
    onChange: (value: string) => void,
    type: string = "text",
    error?: string
  ) => (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "transition-all duration-200",
          error && "border-red-500 focus-visible:ring-red-500"
        )}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );

  const renderAddressFields = (
    section: keyof RegistrationData,
    address: Address,
    showSameAsAbove?: boolean
  ) => (
    <div className="space-y-4">
      {showSameAsAbove && (
        <div className="flex items-center space-x-2">
          <Checkbox id="sameAddress" />
          <Label htmlFor="sameAddress">Same as above</Label>
        </div>
      )}
      {renderInputField("Street Address", "street", address.street, 
        (value) => handleAddressChange(section, "street", value))}
      <div className="grid grid-cols-2 gap-4">
        {renderInputField("City", "city", address.city,
          (value) => handleAddressChange(section, "city", value))}
        {renderInputField("State", "state", address.state,
          (value) => handleAddressChange(section, "state", value))}
      </div>
      {renderInputField("Postcode", "postcode", address.postcode,
        (value) => handleAddressChange(section, "postcode", value))}
    </div>
  );

  return (
    <div className="min-h-screen bg-primary/10 p-4 md:p-6">
      <div className="max-w-2xl mx-auto pt-8 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-between">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                )}
                <div className="flex-1 text-center">
                  <CardTitle className="text-2xl font-bold">
                    {step === 1 && "Primary User Information"}
                    {step === 2 && "Spouse Information"}
                    {step === 3 && "Heir Information"}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    Step {step} of {totalSteps}
                  </p>
                </div>
                {step > 1 && <div className="w-8" />}
              </div>
            </CardHeader>

            {/* Progress Bar */}
            <div className="px-6 py-1">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {step === 1 && (
                    <div className="space-y-6">
                      {renderInputField("Full Name", "fullName", 
                        formData.primaryUser.fullName,
                        (value) => handleInputChange("primaryUser", "fullName", value))}
                      {renderInputField("IC Number", "icNumber", 
                        formData.primaryUser.icNumber,
                        (value) => handleInputChange("primaryUser", "icNumber", value),
                        "text",
                        formData.primaryUser.icNumber && !validateIC(formData.primaryUser.icNumber) 
                          ? "Please enter a valid Malaysian IC number (e.g., 900101-12-3456)"
                          : undefined)}
                      {renderInputField("Email", "email", 
                        formData.primaryUser.email,
                        (value) => handleInputChange("primaryUser", "email", value),
                        "email")}
                      {renderInputField("Phone", "phone", 
                        formData.primaryUser.phone,
                        (value) => handleInputChange("primaryUser", "phone", value),
                        "tel")}
                      {renderAddressFields("primaryUser", formData.primaryUser.address)}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="married">Marital Status</Label>
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="married"
                            checked={formData.isMarried}
                            onCheckedChange={(checked) => 
                              setFormData(prev => ({ ...prev, isMarried: checked }))}
                          />
                          <Label htmlFor="married">
                            {formData.isMarried ? "Married" : "Single"}
                          </Label>
                        </div>
                      </div>

                      {formData.isMarried && (
                        <div className="space-y-6">
                          {renderInputField("Spouse's Full Name", "spouseFullName",
                            formData.spouse?.fullName || "",
                            (value) => handleInputChange("spouse", "fullName", value))}
                          {renderInputField("Spouse's IC Number", "spouseIcNumber",
                            formData.spouse?.icNumber || "",
                            (value) => handleInputChange("spouse", "icNumber", value))}
                          {renderInputField("Spouse's Email", "spouseEmail",
                            formData.spouse?.email || "",
                            (value) => handleInputChange("spouse", "email", value),
                            "email")}
                          {renderInputField("Spouse's Phone", "spousePhone",
                            formData.spouse?.phone || "",
                            (value) => handleInputChange("spouse", "phone", value),
                            "tel")}
                          {renderAddressFields("spouse", 
                            formData.spouse?.address || { street: "", city: "", state: "", postcode: "" },
                            true)}
                        </div>
                      )}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      {formData.heirs.map((heir, index) => (
                        <div key={index} className="space-y-6 border-b pb-6 last:border-0">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                              Heir {index + 1}
                            </h3>
                            {formData.heirs.length > 1 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveHeir(index)}
                                className="text-red-500 hover:text-red-600"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                            )}
                          </div>

                          {renderInputField("Full Name", `heir${index}FullName`,
                            heir.fullName,
                            (value) => {
                              const newHeirs = [...formData.heirs];
                              newHeirs[index].fullName = value;
                              setFormData(prev => ({ ...prev, heirs: newHeirs }));
                            })}
                          {renderInputField("IC Number", `heir${index}IcNumber`,
                            heir.icNumber,
                            (value) => {
                              const newHeirs = [...formData.heirs];
                              newHeirs[index].icNumber = value;
                              setFormData(prev => ({ ...prev, heirs: newHeirs }));
                            })}
                          {renderInputField("Relationship", `heir${index}Relationship`,
                            heir.relationship,
                            (value) => {
                              const newHeirs = [...formData.heirs];
                              newHeirs[index].relationship = value;
                              setFormData(prev => ({ ...prev, heirs: newHeirs }));
                            })}
                          {renderAddressFields(`heirs[${index}]`, heir.address, true)}
                        </div>
                      ))}

                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddHeir}
                        className="w-full"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Another Heir
                      </Button>
                    </div>
                  )}

                  <div className="flex justify-end pt-6">
                    {step < totalSteps ? (
                      <Button onClick={handleNext} className="w-full sm:w-auto">
                        Next Step
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button onClick={handleSubmit} className="w-full sm:w-auto">
                        Complete Registration
                      </Button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Steps indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index + 1 <= step ? "bg-primary" : "bg-gray-300"
              }`}
              animate={{
                scale: index + 1 === step ? 1.2 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;