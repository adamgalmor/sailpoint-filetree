import { File } from "./"

export class Folder {
    public id: number;
    public name: string;
    public hasChildren: boolean;
    public files: File[];
}
