package si.zenlab.v2.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;

import de.hybris.platform.util.Config;
import si.zenlab.gg.facades.GGCustomerFacade;
import si.zenlab.gg.facades.GGSubscriberFacade;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import si.zenlab.gg.commercewebservices.dto.sappi.ResponseDataWsDTO;
import org.apache.commons.validator.EmailValidator;

import de.hybris.platform.acceleratorservices.urlresolver.SiteBaseUrlResolutionService;
import de.hybris.platform.site.BaseSiteService;

import javax.servlet.http.HttpSession;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import java.io.IOException;

@Controller
@RequestMapping(value = "/{baseSiteId}/subscribers")
public class GGSubscriberController {

    @Resource(name = "ggCustomerFacade")
    private GGCustomerFacade ggCustomerFacade;

    @Resource(name = "ggSubscriberFacade")
    private GGSubscriberFacade ggSubscriberFacade;

    @Resource
    SiteBaseUrlResolutionService siteBaseUrlResolutionService;

    @Resource
    BaseSiteService baseSiteService;

    @Secured({"ROLE_CLIENT", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @RequestMapping(method = RequestMethod.POST)
    public void subscribeUser(@RequestParam(required = true) final String subscriberEmail, final HttpServletResponse httpServletResponse, @PathVariable final String baseSiteId) throws IOException {
        
        System.out.println(subscriberEmail);

        if (!EmailValidator.getInstance().isValid(subscriberEmail) || !ggCustomerFacade.checkIfCustomerExists(subscriberEmail)) {

            System.out.println("Not valid");
            httpServletResponse.sendRedirect(siteBaseUrlResolutionService.getWebsiteUrlForSite(baseSiteService.getBaseSiteForUID(baseSiteId), true, "/cart"));

	    return;
        }
        try {
            ggSubscriberFacade.subscribe(subscriberEmail, "subscription"); 
        } catch (Exception e) {

            System.out.println(e);
            httpServletResponse.sendRedirect(siteBaseUrlResolutionService.getWebsiteUrlForSite(baseSiteService.getBaseSiteForUID(baseSiteId), true, "/cart"));
        }
    } 
}
