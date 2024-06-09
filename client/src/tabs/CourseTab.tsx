import CourseForm from "@/components/forms/CourseForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CouresTable from "@/table/CouresTable";

export function CourseTab() {
  return (
    <Tabs defaultValue="list" className="w-full ">
      <TabsList className="grid w-fit grid-cols-2 bg-gray-300">
        <TabsTrigger value="list">List</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="list">
        <CouresTable />
      </TabsContent>
      <TabsContent value="create">
        <CourseForm />
      </TabsContent>
    </Tabs>
  );
}
