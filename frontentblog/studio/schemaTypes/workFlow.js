import { defineField } from "sanity";

export default {
    name: 'workFlow',
    title: 'Workflow',
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
                name: 'description',
                title: 'Description',
                type: 'string'
            }),
        ]}