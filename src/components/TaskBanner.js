import React from "react";

export const TaskBanner = (props) => (
  <h4 className="bg-warning text-darck text-center p-4">
    {props.userName}Aplicación de Tareas. (
    {props.taskItems.filter((t) => !t.done).length} tareas por hacer)
  </h4>
);



