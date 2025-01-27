{previous_file_content}

// First, let's add the state dropdown by modifying the renderAddressFields function. 
// Replace the state input field in the grid with:

const malaysianStates = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Perak",
  "Perlis",
  "Pulau Pinang",
  "Sabah",
  "Sarawak",
  "Selangor",
  "Terengganu",
  "Wilayah Persekutuan Kuala Lumpur",
  "Wilayah Persekutuan Labuan",
  "Wilayah Persekutuan Putrajaya"
];

// Update the renderAddressFields function to use Select component for state
const renderAddressFields = (
  section: keyof RegistrationData,
  address: Address,
  showSameAsAbove?: boolean
) => (
  <div className="space-y-4">
    {showSameAsAbove && (
      <div className="flex items-center space-x-2">
        <Checkbox id="sameAddress" className="border-[#6abd45] text-[#6abd45]" />
        <Label htmlFor="sameAddress" className="text-[#6abd45]">
          Same as above
        </Label>
      </div>
    )}
    {renderInputField("Street Address", "street", address.street, 
      (value) => handleAddressChange(section, "street", value))}
    <div className="grid grid-cols-2 gap-4">
      {renderInputField("City", "city", address.city,
        (value) => handleAddressChange(section, "city", value))}
      <div className="space-y-2">
        <Label htmlFor="state" className="text-[#6abd45] font-medium">
          State
        </Label>
        <Select
          value={address.state}
          onValueChange={(value) => handleAddressChange(section, "state", value)}
        >
          <SelectTrigger className="bg-gray-50 border-[#6abd45]/20 focus-visible:ring-[#6abd45]">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            {malaysianStates.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
    {renderInputField("Postcode", "postcode", address.postcode,
      (value) => handleAddressChange(section, "postcode", value))}
  </div>
);

// Add these imports at the top of the file
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";