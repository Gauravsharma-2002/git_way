"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

type FormInput = {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
};
const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  function onSubmit(data: FormInput) {
    window.alert(data);
    return true;
  }

  return (
    <div className="flex h-full items-center justify-center gap-12">
      <img src="" className="2-auto h-56" />
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
              placeholder="ProjectName"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
