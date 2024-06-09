import InstructorForm from "@/components/forms/InstructorForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstructorTable from "@/table/InstructorTable";

export function InstructorTab() {
  return (
    <Tabs defaultValue="list" className="w-full">
      <TabsList className="grid w-fit grid-cols-2 bg-gray-300">
        <TabsTrigger value="list">List</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="list">
        <InstructorTable />
      </TabsContent>
      <TabsContent value="create">
        <InstructorForm />
      </TabsContent>
    </Tabs>
  );
}
