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
        StatsDBEntities statsDB = new StatsDBEntities();

        [Route("api/stats/data1")]
        public IEnumerable<string> GetStatsdata1()
        {
            var result =
               (from sales in ordersDB.Orders
                select sales.SalesPersonTable.FirstName + " " + sales.SalesPersonTable.LastName).Distinct().AsEnumerable();

            return result;
        }

        [Route("api/stats/data2")]
        public IEnumerable<string> GetStores()
        {
            var result =
                (from stores in ordersDB.Orders
                select stores.StoreTable.City).Distinct().AsEnumerable();

            return result;
        }

        [Route("api/stats/data3")]
        public IHttpActionResult GetEmployeePerformance(string employeeName)
        {
            var result =
                (from order in ordersDB.Orders
                 where (order.SalesPersonTable.FirstName + " " + order.SalesPersonTable.LastName) == employeeName
                 select order.pricePaid).Sum();

            return Ok(result);
        }
    }
}
