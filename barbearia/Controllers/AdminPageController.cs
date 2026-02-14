using Microsoft.AspNetCore.Mvc;

namespace barbearia.Controllers
{
    public class AdminPageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
