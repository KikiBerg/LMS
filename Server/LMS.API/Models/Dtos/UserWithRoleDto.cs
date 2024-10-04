﻿namespace LMS.API.Models.Dtos
{
    public record UserWithRoleDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}