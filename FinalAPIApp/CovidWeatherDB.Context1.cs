﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ProductsApp
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CovidWeatherDBEntities : DbContext
    {
        public CovidWeatherDBEntities()
            : base("name=CovidWeatherDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<DailyCovidCas> DailyCovidCases { get; set; }
        public virtual DbSet<DailyWeather> DailyWeathers { get; set; }
        public virtual DbSet<MonthlyCovidCas> MonthlyCovidCases { get; set; }
        public virtual DbSet<MonthlyWeather> MonthlyWeathers { get; set; }
    }
}
