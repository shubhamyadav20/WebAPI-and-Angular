using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProductApi.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Test
{
    [TestClass]
    public class ProductRepositoryTest
    {
        ProductRepository repo;
        [TestInitialize]
        public void TestSetUp()
        {
            ProductInitalizeDb db = new ProductInitalizeDb();
            System.Data.Entity.Database.SetInitializer(db);
            repo = new ProductRepository();
        }
        [TestMethod]
        public void ShouldProductRepoInitializingTwoRecordsInBeginning()
        {
            var result = repo.GetProducts();
            Assert.IsNotNull(result);
            var nv = result.ToList().Count;
            Assert.AreEqual(2, nv);
        }
        [TestMethod]
        public void ShouldReturnProductForTheGivenInputId()
        {
            string idInput = "1";
            var result = repo.GetById(idInput);
            Assert.IsNotNull(result);
            string nv = result.Title;
            Assert.AreEqual("Hammer", nv);
        }
    }
}
