using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using System.Web.Mvc;  // need to add that 

namespace ProductsApp.Controllers
{
    public class StatsController : ApiController
    {
         Stats stats = new Stats();

        [Route("api/stats/query1")]
        public IEnumerable<string> GetStats1()
        {
            var result =
               (from sales in ordersDB.Orders
                select sales.SalesPersonTable.FirstName + " " + sales.SalesPersonTable.LastName).Distinct().AsEnumerable();

            return result;
        }

        [Route("api/stats/query2")]
        public IEnumerable<string> GetStats2()
        {
            var result =
                (from stores in ordersDB.Orders
                select stores.StoreTable.City).Distinct().AsEnumerable();

            return result;
        }

        [Route("api/stats/query3")]
        public IHttpActionResult GetStats3()
        {
            var result =
                (from order in ordersDB.Orders
                 where (order.SalesPersonTable.FirstName + " " + order.SalesPersonTable.LastName) == employeeName
                 select order.pricePaid).Sum();

            return Ok(result);
        }
    }
}
