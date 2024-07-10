import { defineField } from "sanity";

export default {
    name: 'proyectos',
    title: 'Proyectos',
    type: 'document',
    fields: [
        defineField(
            {
                name: 'title',
                title: 'title',
                type: 'string',
            }),
        defineField(
            {
                name: 'publishedAt',
                title: 'Published at',
                type: 'datetime'
            }),
        defineField(
            {
                name: 'place',
                type: 'string'
            }),
        defineField(
            {
                name: 'description',
                type: 'string'
            }),
        defineField(
            {
                name: 'projectType',
                title: 'Project type',
                type: 'string',
                options: {
                    list: [
                        { value: 'personal', title: 'Personal' },
                        { value: 'client', title: 'Client' },
                    ],
                },
            }),
        defineField(
            {
                name: 'mainImage',
                title: 'Main image',
                type: 'image',
                options: {
                    hotspot: true
                }
            }),
        defineField(
            {
                name: 'link',
                type: 'url',
            }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
        }
    }
}