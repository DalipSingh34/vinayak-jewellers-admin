# Vinayak Jewellers Database Structure


## Collections


## Admin Collection

Admin
{
    _id,
    name,
    email,
    password,
    role,
    createdAt,
    updatedAt
}


Purpose:
- Admin authentication
- Role based access


------------------------------------------------


## Category Collection

Category
{
    _id,
    name,
    description,
    image,
    createdAt,
    updatedAt
}


Relationship:

Category 1 ---- N SubCategory



------------------------------------------------


## SubCategory Collection


SubCategory
{
    _id,
    name,
    description,
    image,

    category:
    {
        ObjectId
        ref: Category
    },

    createdAt,
    updatedAt
}



Relationship:

One Category can have many SubCategories.



------------------------------------------------


## Product Collection


Product
{
    _id,

    name,

    slug,

    description,

    images[],

    price,

    weight,

    material,

    purity,

    stock,


    category:
    {
        ObjectId,
        ref: Category
    },


    subCategory:
    {
        ObjectId,
        ref: SubCategory
    },


    seoTitle,

    seoDescription,

    featured,

    status,

    createdAt,

    updatedAt
}



Relationships:


Category
     |
     |
     |---- many Products



SubCategory
     |
     |
     |---- many Products



------------------------------------------------


# Entity Relationship Diagram



                +-------------+
                |   Admin     |
                +-------------+
                       |
                       |
                Authentication



+-------------+
|  Category   |
+-------------+
       |
       | 1:N
       |
+----------------+
| SubCategory    |
+----------------+
       |
       | 1:N
       |
+----------------+
|   Product      |
+----------------+


