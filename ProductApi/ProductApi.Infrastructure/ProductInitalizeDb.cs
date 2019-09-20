using ProductApi.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
    public class ProductInitalizeDb : System.Data.Entity.DropCreateDatabaseIfModelChanges<ProductContext>
    {

        protected override void Seed(ProductContext context)
        {
            context.products.Add(new Product
            {
                ProductID = "1",
                Color="Red",
                Details="This is awesome product",
                ExpiryDate = DateTime.Now,
                ImageUrl="abc.jpg",
                inStock=true,
                Price =400,
                Quantity=50,
                Rating=5,
                Title="Hammer"

            }) ;

            context.products.Add(new Product
            {

                ProductID = "2",
                Color = "Blue",
                Details = "This is very very awesome product",
                ExpiryDate = DateTime.Now,
                ImageUrl = "xyz.jpg",
                inStock = true,
                Price = 400,
                Quantity = 50,
                Rating = 5,
                Title = "Saw"

            });

            context.SaveChanges();
            base.Seed(context);


            

        }
    }
}
