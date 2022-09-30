using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace PersonalSite.UI.MVC.Models
{
    [Keyless]
    public class ContactViewModel
    {        
        [Required(ErrorMessage = "*Name Is Required")] 
        public string Name { get; set; }

        [Required(ErrorMessage = "*Email Is Required")]
        [DataType(DataType.EmailAddress)] 
        public string Email { get; set; }

        [Required(ErrorMessage = "*Subject Is Required")]
        public string Subject { get; set; }

        [Required(ErrorMessage = "*Message Is Required")]
        [DataType(DataType.MultilineText)] 
        public string Message { get; set; }
    }
}
