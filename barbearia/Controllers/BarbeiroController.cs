using Microsoft.AspNetCore.Mvc;

namespace barbearia.Controllers
{
    public class BarbeiroController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
