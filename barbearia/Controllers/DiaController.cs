using Microsoft.AspNetCore.Mvc;

namespace barbearia.Controllers
{
    public class DiaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
