import ScheduleForm from "@/components/forms/ScheduleForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduleTable from "@/table/ScheduleTable";

export function ScheduleTab() {
  return (
    <Tabs defaultValue="list" className="w-full">
      <TabsList className="grid w-fit grid-cols-2 bg-gray-300">
        <TabsTrigger value="list">List</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="list">
        <ScheduleTable />
      </TabsContent>
      <TabsContent value="create">
        <ScheduleForm />
      </TabsContent>
    </Tabs>
  );
}
