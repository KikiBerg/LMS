﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LMS.API.Models.Entities
{
    public class User
    {
        //Primary key Guid
        [Key]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Name is a required field.")]
        [MaxLength(15, ErrorMessage = "Max length is 15.")]

        public string Name { get; set; }

        [Required(ErrorMessage = "Email is a required field.")]
        [MaxLength(ErrorMessage = "Maximum length is 20.")]

        public string Email { get; set; }

        [Required(ErrorMessage = "User must have a role.")]
        public string Role { get; set; }

        //Foreign key Guid
        [ForeignKey("Course")]
        public Guid CourseId { get; set; }
        public virtual Course Course { get; set; }

        //Navigation property for Artifacts
        public ICollection<Artifact>? Artifacts { get; set; }
    }
}
