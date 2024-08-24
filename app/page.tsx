"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

const dummyTodo = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    completed: true,
  },
  {
    id: 3,
    title: "Do laundry",
    completed: false,
  },
];

export default function TableDemo() {
  const [todo, setTodo] = useState("");
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Serial No.</TableHead>
          <TableHead>Task</TableHead>
          <TableHead>Completion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyTodo.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>{todo.id}</TableCell>
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell>
              <Checkbox />
            </TableCell>
            <div className="flex justify-center items-center ">
              {/* <button></button> */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <Dialog>
          <DialogTrigger>Add</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a todo</DialogTitle>
              <DialogDescription>
                <Input value={todo} onChange = {setTodo}/>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TableFooter>
    </Table>
  );
}
