import { ProjectModel } from "../schemas/project";

class Project {
  static async create({ newProject }) {
    const createdNewProject = await ProjectModel.create(newProject);
    return createdNewProject;
  }
  static async findById({ id }) {
    const project = await ProjectModel.findOne({ id });
    return project;
  }
  static async findByUserId({ user_id }) {
    const projects = await ProjectModel.find({ user_id });
    return projects;
  }
  static async update({ id, fieldToUpdate, newValue }) {
    const filter = { id: id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedProject = await ProjectModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedProject;
  }
  static async delete({ id }) {
    const deletedProject = await ProjectModel.deleteOne({ id });
    return deletedProject;
  }
}

export { Project };
