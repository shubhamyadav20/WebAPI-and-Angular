using ProductApi.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Core.Repositories
{
    public interface IProductRepository
    {

        void Add(Product p);

        void Edit(Product p);

        void Delete(String ProductID);

        IEnumerable<Product> GetProducts();

        Product GetById(string ProductId);
    }
}
