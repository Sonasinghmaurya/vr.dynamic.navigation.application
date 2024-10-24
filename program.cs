using Mapbox.Unity.Map;
using Mapbox.Utils;
using UnityEngine;
using UnityEngine;
using Valve.VR;

public class MapManager : MonoBehaviour
{
    public AbstractMap map;

    void Start()
    {
        // Initialize map at a default location
        map.Initialize(new Vector2d(37.7749, -122.4194), 10); // San Francisco
    }

    void Update()
    {
        // Update map if needed
    }
}
public class VRNavigator : MonoBehaviour
{
    public SteamVR_Action_Vector2 touchpadAction;
    public float flySpeed = 10f;

    private void Update()
    {
        Vector2 touchpadValue = touchpadAction.GetAxis(SteamVR_Input_Sources.Any);

        // Fly across the world map based on touchpad input
        Vector3 direction = new Vector3(touchpadValue.x, 0, touchpadValue.y);
        transform.Translate(direction * flySpeed * Time.deltaTime);
    }
}
public class LocationSearch : MonoBehaviour
{
    public AbstractMap map;
    
    public void SearchLocation(string query)
    {
        MapboxGeocoder geocoder = new MapboxGeocoder();
        var coordinates = geocoder.GetCoordinatesFromAddress(query);
        
        if (coordinates != null)
        {
            map.SetCenterLatitudeLongitude(coordinates);
            map.UpdateMap();
        }
    }
}

