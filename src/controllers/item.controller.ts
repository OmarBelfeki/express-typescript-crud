import { Request, Response } from "express";
import { items, Item } from "../models/item.model";

export const getItems = (req: Request, res: Response) => {
    res.json(items);
};

export const getItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const item = items.find((i) => i.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
};

export const createItem = (req: Request, res: Response) => {
    const { name, description } = req.body;

    const newItem: Item = {
        id: items.length + 1,
        name,
        description,
    };

    items.push(newItem);
    res.status(201).json(newItem);
};

export const updateItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;

    const item = items.find((i) => i.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }

    item.name = name || item.name;
    item.description = description || item.description;

    res.json(item);
};

export const deleteItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex((i) => i.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Item not found" });
    }

    items.splice(index, 1);
    res.status(204).send();
};
