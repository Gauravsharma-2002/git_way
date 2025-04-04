"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import React from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormInput = {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
};
const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const createProject = api.project.createProject.useMutation();

  // submitHandler
  function onSubmit(data: FormInput) {
    // window.alert(JSON.stringify(data, null, 2));
    createProject.mutate(
      {
        githubUrl: data.repoUrl,
        name: data.projectName,
        githubToken: data.githubToken,
      },
      {
        onSuccess: () => {
          toast.success("project created SucessFully");
        },
        onError: () => {
          toast.error("Failed To create project");
        },
      },
    );
    return true;
  }
  return (
    <div className="flex h-full items-center justify-center gap-12">
      <img src="2869464.jpg" alt="logo" className="2-auto h-56" />
      <div>
        <div>
          <h1 className="text-2xl font-semibold">
            Link Your GitHub Repository
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter the URL of your repository to link it to gitWay
          </p>
        </div>
        <div className="h-4"></div>
        <div>
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("repoUrl", { required: true })}
              placeholder="repoUrl"
              type="url"
              required
            />
            <div className="h-2"></div>
            <Input
              {...register("projectName", { required: true })}
              placeholder="ProjectName"
              required
            />
            <div className="h-2"></div>
            <Input {...register("githubToken")} placeholder="githubToken" />
            <div className="h-4"></div>
            <Button type="submit" disabled={createProject.isPending}>
              Create Project
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
