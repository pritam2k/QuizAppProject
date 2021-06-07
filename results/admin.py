from django.contrib import admin
from .models import Result


class ResultAdmin(admin.ModelAdmin):
    list_display = ('user', 'score')


admin.site.register(Result, ResultAdmin)
