using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudWebApplication.Model
{
    public class Student
    {
        [Key]
        public  int id { get; set; }
        [Column(TypeName ="nvachar(100)")]
        public string name { get; set; }
        public int age { get; set; }
        [Column(TypeName = "nvachar(100)")]
        public string email { get; set; }
        [Column(TypeName = "nvachar(100)")]
        public string phone { get; set; }
        [Column(TypeName = "nvachar(100)")]
        public string city { get; set; }

    }
}
