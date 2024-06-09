import BatchForm from "@/components/forms/BatchForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BatchTable from "@/table/BatchTable";

export function BatchTab() {
  return (
    <Tabs defaultValue="list" className="w-full">
      <TabsList className="grid w-fit grid-cols-2 bg-gray-300">
        <TabsTrigger value="list">List</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="list">
        <BatchTable />
      </TabsContent>
      <TabsContent value="create">
        <BatchForm />
      </TabsContent>
    </Tabs>
  );
}
