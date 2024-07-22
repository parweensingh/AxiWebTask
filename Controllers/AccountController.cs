using Microsoft.AspNetCore.Mvc;
using AxiWebTask.Models;
using System;
using static System.Net.Mime.MediaTypeNames;

namespace AxiWebTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        [HttpPost]
        [Route("submit")]
        public IActionResult SubmitApplication([FromBody] Account account)
        {
            var decision = GetDecision(account);
            return Ok(new { result = decision });
        }

        private string GetDecision(Account account)
        {
            var age = DateTime.Now.Year - account.DateOfBirth.Year;
            if (DateTime.Now.DayOfYear < account.DateOfBirth.DayOfYear)
                age--;

            return age < 21 ? "Declined" : "Approved";
        }
    }
}
