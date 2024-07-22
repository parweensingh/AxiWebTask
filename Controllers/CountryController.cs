using Microsoft.AspNetCore.Mvc;
using AxiWebTask.Models;
using System.Collections.Generic;
using System.Diagnostics.Metrics;

namespace AxiWebTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCountries()
        {
            var countries = new List<Country>
            {
                new Country { CountryName = "Austria", CountryCode = "AT", PhoneCode = "+43" },
                new Country { CountryName = "Cyprus", CountryCode = "CY", PhoneCode = "+357" },
                new Country { CountryName = "Germany", CountryCode = "DE", PhoneCode = "+49" }
            };
            return Ok(countries);
        }
    }
}
