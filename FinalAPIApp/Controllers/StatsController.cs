using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using System.Web.Mvc;  // need to add that 

namespace CovidWeatherAPI.Controllers
{
    public class StatsController : ApiController
    {
         Stats stats = new Stats();

        [Route("api/stats/query1")]
        public IHttpActionResult GetStats1() //monthly average temp vs covid
        {
            var result =
               from weather in stats.MonthlyWeathers
                join covid in stats.MonthlyCovidCases on weather.MonthlyID equals covid.MonthlyID
                orderby weather.MonthlyID ascending
                select new {Year = weather.Year, 
                            Month = weather.Month,
                            Temp = weather.MonthlyMeanTemperature,
                            Positives = covid.MonthlyPositives};

            return Json(result);
        }

        [Route("api/stats/query2")]
        public IHttpActionResult GetStats2() //monthly precipitation vs covid
        {
            var result =
               from weather in stats.MonthlyWeathers
               join covid in stats.MonthlyCovidCases on weather.MonthlyID equals covid.MonthlyID
               orderby weather.MonthlyID ascending
               select new
               {
                   Year = weather.Year,
                   Month = weather.Month,
                   Rain = weather.MonthlyTotalLiquidPrecipitation,//cmon it's not like we have snow
                   Positives = covid.MonthlyPositives
               };

            return Json(result);
        }

        [Route("api/stats/query3")]
        public IHttpActionResult GetStats3()// daily temp vs covid for extra granularity
        {
            var result =
               from weather in stats.DailyWeathers
               join covid in stats.DailyCovidCases on weather.DailyID equals covid.DailyID
               join years in stats.MonthlyWeathers on covid.MonthlyID equals years.MonthlyID
               orderby weather.DailyID ascending
               select new
               {
                   Year = years.Year,
                   Month = weather.Month,
                   Day = weather.Day,
                   Rain = weather.DailyPrecipitation,//cmon it's not like we have snow
                   Positives = covid.DailyPositives
               };

            return Json(result);
        }
    }
}
