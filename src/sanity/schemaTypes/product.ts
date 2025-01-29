import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
            {
                  name: 'content',
                  type: 'array',
                  title: 'Content',
                
                  of: [{ type: 'block' }],
                },
                {
                  name: 'size',
                  title: 'Size',
                  type: 'string',
                  
                },
                {
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  options: {
                    list: ['Dress', 'Electronics', 'Accessories', 'Others'], // Example categories
                  },
                                  },
                {
                  name: 'quantity',
                  title: 'Quantity',
                  type: 'number',
                  validation: (rule) => rule.required().min(1).error('Quantity must be at least 1'),
                },
       
           
       
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
            options: {
              hotspot: true, // Enable image cropping
            },
              
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },{
          title: 'Poster',
          name: 'poster',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          }
       
    ]
})