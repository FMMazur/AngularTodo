export class Todo {
  constructor(
    public id: number = -1,
    public listId: number,
    public userId: number,
    public title: string,
    public description: string
  ) {}
}
