export class Media {
  title: string;
  filePath: string;
  description: string;
  tags: string[];
  date: Date;
  constructor(title: string, filePath: string, description: string, tags: string[])
  {
    this.title = title;
    this.filePath = filePath;
    this.description = description;
    this.tags = tags;
    this.date = new Date();
  }
}
